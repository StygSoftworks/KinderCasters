let announceTimeout: NodeJS.Timeout | null = null;

export function announce(message: string, priority: 'polite' | 'assertive' = 'polite') {
  if (announceTimeout) {
    clearTimeout(announceTimeout);
  }

  let announcer = document.getElementById(`aria-announcer-${priority}`);

  if (!announcer) {
    announcer = document.createElement('div');
    announcer.id = `aria-announcer-${priority}`;
    announcer.setAttribute('role', 'status');
    announcer.setAttribute('aria-live', priority);
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'sr-only';
    document.body.appendChild(announcer);
  }

  announcer.textContent = '';

  announceTimeout = setTimeout(() => {
    if (announcer) {
      announcer.textContent = message;
    }
  }, 100);
}

export function clearAnnouncement() {
  if (announceTimeout) {
    clearTimeout(announceTimeout);
  }

  const politeAnnouncer = document.getElementById('aria-announcer-polite');
  const assertiveAnnouncer = document.getElementById('aria-announcer-assertive');

  if (politeAnnouncer) politeAnnouncer.textContent = '';
  if (assertiveAnnouncer) assertiveAnnouncer.textContent = '';
}
