(function () {
  'use strict';
  const toggle = document.getElementById('menu-toggle');
  const navigation = document.getElementById('primary-nav');
  function closeMenu(returnFocus) {
    if (!toggle || !navigation) return;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    navigation.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    if (returnFocus) toggle.focus();
  }
  if (toggle && navigation) {
    toggle.addEventListener('click', function () {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      navigation.classList.toggle('is-open', open);
      document.body.classList.toggle('menu-open', open);
    });
    navigation.addEventListener('click', function (event) {
      if (event.target.closest('a')) closeMenu(false);
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') closeMenu(true);
    });
    document.addEventListener('click', function (event) {
      if (!navigation.contains(event.target) && !toggle.contains(event.target)) closeMenu(false);
    });
    window.matchMedia('(min-width: 601px)').addEventListener('change', function (event) {
      if (event.matches) closeMenu(false);
    });
  }
  const year = document.getElementById('copyright-year');
  if (year) year.textContent = String(new Date().getFullYear());

  const form = document.getElementById('contact-form');
  const panel = document.getElementById('contact-form-panel');
  const submit = document.getElementById('contact-submit');
  const submitLabel = document.getElementById('contact-submit-label');
  const status = document.getElementById('contact-form-status');
  const availability = document.getElementById('contact-form-availability');
  const config = window.MARKETVISION_FORM;
  const accessKey = config && typeof config.accessKey === 'string' ? config.accessKey.trim() : '';
  const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  const configured = uuidPattern.test(accessKey);
  if (!form || !panel || !submit || !submitLabel || !status || !availability) return;

  const fields = {
    name: form.elements.namedItem('name'),
    organization: form.elements.namedItem('organization'),
    email: form.elements.namedItem('email'),
    topic: form.elements.namedItem('topic'),
    message: form.elements.namedItem('message'),
    botcheck: form.elements.namedItem('botcheck')
  };
  if (Object.values(fields).some(function (field) { return !field; })) return;
  let sending = false;

  function showFormStatus(message, state) {
    status.textContent = message;
    status.dataset.state = state;
    status.setAttribute('role', state === 'error' ? 'alert' : 'status');
    status.setAttribute('aria-live', state === 'error' ? 'assertive' : 'polite');
    status.hidden = false;
    if (state !== 'sending') status.focus();
  }

  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    if (sending) return;
    if (!configured) {
      showFormStatus('The contact form is temporarily unavailable. Please try again later.', 'error');
      return;
    }
    ['name', 'organization', 'email', 'topic', 'message'].forEach(function (name) {
      fields[name].value = fields[name].value.trim();
    });
    if (!form.reportValidity()) return;
    if (fields.botcheck.checked) {
      showFormStatus('Your message could not be sent. Please refresh the page and try again.', 'error');
      return;
    }

    const payload = {
      access_key: accessKey,
      subject: 'MarketVision Technology — website enquiry',
      from_name: 'MarketVision Technology',
      name: fields.name.value,
      organization: fields.organization.value,
      email: fields.email.value,
      replyto: fields.email.value,
      topic: fields.topic.value,
      message: fields.message.value,
      botcheck: false
    };
    const controlStates = Array.from(form.elements).map(function (control) {
      return { control: control, disabled: control.disabled };
    });
    sending = true;
    controlStates.forEach(function (item) { item.control.disabled = true; });
    form.setAttribute('aria-busy', 'true');
    submitLabel.textContent = 'Sending…';
    showFormStatus('Sending your message…', 'sending');

    const controller = new AbortController();
    const timeout = window.setTimeout(function () { controller.abort(); }, 20000);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal
      });
      const result = await response.json();
      if (!response.ok || !result || result.success !== true) {
        showFormStatus('Your message was not submitted. Your details are still here. Please try again.', 'error');
        return;
      }
      form.reset();
      showFormStatus('Thank you. Your message has been sent.', 'success');
    } catch (error) {
      const message = error && error.name === 'AbortError'
        ? 'We could not confirm whether your message was received before the request timed out. Your details are still here. Please try again later.'
        : 'We could not confirm that your message was submitted. Your details are still here. Please try again.';
      showFormStatus(message, 'error');
    } finally {
      window.clearTimeout(timeout);
      controlStates.forEach(function (item) { item.control.disabled = item.disabled; });
      form.setAttribute('aria-busy', 'false');
      submitLabel.textContent = 'Send message';
      sending = false;
    }
  });

  submit.disabled = !configured;
  availability.hidden = configured;
}());
