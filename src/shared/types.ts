export enum SelectedPage {
    Home = "home",
    About = "about",
    Contact = "contact",
    Projects = "projects"
  }

export interface ProjectType {
    icon: JSX.Element;
    title: string;
    description: string;
    path: string;
    element: any;
  }
  
export interface ClassType {
    name: string;
    description?: string;
    image: string;
  }