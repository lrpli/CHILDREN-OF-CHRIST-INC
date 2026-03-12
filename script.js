const yearNode = document.getElementById('year');
if (yearNode) yearNode.textContent = new Date().getFullYear();

const copyEmailBtn = document.getElementById('copyEmailBtn');
if (copyEmailBtn) {
  copyEmailBtn.addEventListener('click', async () => {
    const status = document.getElementById('statusMessage');
    try {
      await navigator.clipboard.writeText('info@gloriadeo.us');
      if (status) status.textContent = 'Email copied: info@gloriadeo.us';
    } catch {
      if (status) status.textContent = 'Copy failed. Please copy manually: info@gloriadeo.us';
    }
  });
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const message = document.getElementById('message')?.value.trim();
    const status = document.getElementById('statusMessage');

    if (!name || !email || !message) {
      if (status) status.textContent = 'Please complete all required fields.';
      return;
    }

    const subject = encodeURIComponent(`Website inquiry - ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:info@gloriadeo.us?subject=${subject}&body=${body}`;
    if (status) status.textContent = 'Opening your mail app with a pre-filled draft.';
    contactForm.reset();
  });
}
