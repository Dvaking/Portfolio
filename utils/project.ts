type Project = {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  demoLink: string;
};

export const Projects: Project[] = [
  {
    title: '🌐  Area',
    description:
      'Welcome to the AREA Automation Suite, a powerful platform inspired by IFTTT and Zapier called the SafeAREA.\nThis software allows users to automate workflows by connecting Actions and REActions through AREA configurations (Action-REAction-Automations).\nThe suite includes the following components:\n\n\
    \t- Application Server: Manages core functionalities like user management, services, and AREA handling.\n\
    \t- Web Client: A browser-based interface to configure and monitor AREA workflows.\n\
    \t- Mobile Client: A mobile app for configuring and monitoring AREA workflows on the go.\n\ ',
    image: '/project/Area51.png',
    githubLink: 'https://github.com/Epitouche/Area51',
    demoLink: '',
  },
];
