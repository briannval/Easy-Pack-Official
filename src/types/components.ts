export interface AccordionElementProps {
  title: string;
  children: React.ReactNode;
}

export interface FeatureProps {
  text: string;
  icon: React.ElementType;
}

export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export interface QualityProps {
  icon: React.ElementType;
  title: string;
  description: string;
}
