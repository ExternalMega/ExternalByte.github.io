document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  if (!app) return;

  // Create splash screen
  const splashScreen = document.createElement('div');
  splashScreen.classList.add('splash-screen');

  const enterText = document.createElement('div');
  enterText.classList.add('enter-text');
  enterText.textContent = 'Click to enter';

  splashScreen.appendChild(enterText);
  app.appendChild(splashScreen);

  // Create main content (initially hidden)
  const mainContent = document.createElement('div');
  mainContent.classList.add('main-content');

  // Logo container
  const logoContainer = document.createElement('div');
  logoContainer.classList.add('logo-container');

  // Logo with ASCII art style
  const logo = document.createElement('div');
  logo.classList.add('logo', 'glitch-effect');

  // ASCII art style logo - using pre tag for monospace
  logo.innerHTML = `
<pre style="color: #00ffff; font-size: 12px; line-height: 1; letter-spacing: 2px; text-align: center;">
    ______      __                        __
   / ____/__ __/ /____ _________  ___ ___/ /
  / __/ / _ \`// __/ -_) __/ __/ |/ _ \`/ _ \\
 /_/    \\_,_/ \\__/\\__/_/ /_/  |___/\\__/_//_/

</pre>
<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.3; pointer-events: none;">
  <pre style="color: #0080ff; font-size: 12px; line-height: 1; letter-spacing: 2px; text-align: center;">
      ______      __                        __
     / ____/__ __/ /____ _________  ___ ___/ /
    / __/ / _ \`// __/ -_) __/ __/ |/ _ \`/ _ \\
   /_/    \\_,_/ \\__/\\__/_/ /_/  |___/\\__/_//_/

  </pre>
</div>
`;

  logoContainer.appendChild(logo);
  mainContent.appendChild(logoContainer);

  // Sections
  const sections = document.createElement('div');
  sections.classList.add('sections');

  // Section 1: Cyber Forensics
  const section1 = document.createElement('div');
  section1.classList.add('section');

  const section1Title = document.createElement('div');
  section1Title.classList.add('section-title');
  section1Title.innerHTML = 'External <span class="section-divider">•</span>';

  const section1Details = document.createElement('div');
  section1Details.classList.add('section-details');
  section1Details.textContent = '—Details—';

  const section1Text = document.createElement('div');
  section1Text.textContent = 'Cyber Forensics & Multiple Networks';

  const section1Links = document.createElement('div');
  section1Links.classList.add('social-links');
  section1Links.innerHTML = `
    <a href="#" aria-label="Discord">⭕</a>
    <a href="#" aria-label="Telegram">📡</a>
    <a href="#" aria-label="GitHub">🔍</a>
  `;

  section1.appendChild(section1Title);
  section1.appendChild(section1Text);
  section1.appendChild(section1Details);
  section1.appendChild(section1Links);

  // Section 2: Paragraphing
  const section2 = document.createElement('div');
  section2.classList.add('section');

  const section2Title = document.createElement('div');
  section2Title.classList.add('section-title');
  section2Title.innerHTML = 'Paragraphing <span class="section-divider">•</span>';

  const section2Details = document.createElement('div');
  section2Details.classList.add('section-details');
  section2Details.textContent = '—Details—';

  const section2Text = document.createElement('div');
  section2Text.textContent = 'Media & Matrix & SysInfo';

  const section2Links = document.createElement('div');
  section2Links.classList.add('social-links');
  section2Links.innerHTML = `
    <a href="#" aria-label="Discord">⭕</a>
    <a href="#" aria-label="Telegram">📡</a>
  `;

  section2.appendChild(section2Title);
  section2.appendChild(section2Text);
  section2.appendChild(section2Details);
  section2.appendChild(section2Links);

  sections.appendChild(section1);
  sections.appendChild(section2);
  mainContent.appendChild(sections);

  // Quote
  const quote = document.createElement('div');
  quote.classList.add('quote');
  quote.innerHTML = 'truth <strong>hurts</strong>, but it also <strong>heals</strong>.<br>- A lie can comfort, but only the truth can set you free.';
  mainContent.appendChild(quote);

  // Domain info
  const domainInfo = document.createElement('div');
  domainInfo.classList.add('domain-info');
  domainInfo.innerHTML = `
    <div>Such fool cannot paste a website.</div>
    <div>The current active domain(s) are:</div>
    <div class="domain-name">external.wtf</div>
  `;
  mainContent.appendChild(domainInfo);

  app.appendChild(mainContent);

  // Handle click event to transition from splash to main content
  splashScreen.addEventListener('click', () => {
    splashScreen.style.opacity = '0';
    setTimeout(() => {
      splashScreen.style.display = 'none';
      mainContent.classList.add('active');
    }, 500);
  });

  // Create the notification popup
  const createNotification = () => {
    const notification = document.createElement('div');
    notification.classList.add('notification');

    const content = document.createElement('div');
    content.textContent = 'external.wtf says';
    notification.appendChild(content);

    const message = document.createElement('div');
    message.style.marginTop = '5px';
    message.style.fontSize = '14px';
    message.textContent = 'External was here lmfao';
    notification.appendChild(message);

    const button = document.createElement('button');
    button.textContent = 'OK';
    button.style.marginLeft = 'auto';
    button.style.marginTop = '10px';
    button.style.display = 'block';
    button.style.backgroundColor = '#6495ED'; // Light blue button
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.padding = '5px 15px';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';

    notification.appendChild(button);

    button.addEventListener('click', () => {
      notification.remove();
    });

    return notification;
  };

  // Show notification after a delay
  setTimeout(() => {
    const notification = createNotification();
    document.body.appendChild(notification);
  }, 3000);
});
