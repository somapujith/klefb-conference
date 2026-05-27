/**
 * Typography Theme System
 * Maintains consistent font styles across the application
 */

export const typography = {
  // Headings - Montserrat Bold at 58px
  headingLarge: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '58px',
    fontWeight: 700, // Bold
    lineHeight: '1.2',
    letterSpacing: '-0.02em',
  },

  // Headings - Montserrat Bold at 36px
  headingMedium: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '36px',
    fontWeight: 700, // Bold
    lineHeight: '1.2',
    letterSpacing: '-0.02em',
  },

  // Headings - Montserrat Bold at 28px
  headingSmall: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '28px',
    fontWeight: 700, // Bold
    lineHeight: '1.3',
    letterSpacing: '-0.01em',
  },

  // Subheadings - Montserrat Regular at 24px
  subheadingLarge: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '24px',
    fontWeight: 400, // Regular
    lineHeight: '1.4',
    letterSpacing: '0',
  },

  // Subheadings - Montserrat Regular at 18px
  subheadingMedium: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '18px',
    fontWeight: 400, // Regular
    lineHeight: '1.5',
    letterSpacing: '0',
  },

  // Body text - Montserrat Regular at 16px
  bodyLarge: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '16px',
    fontWeight: 400, // Regular
    lineHeight: '1.6',
    letterSpacing: '0',
  },

  // Body text - Montserrat Regular at 14px
  bodyMedium: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '14px',
    fontWeight: 400, // Regular
    lineHeight: '1.5',
    letterSpacing: '0',
  },

  // Small text - Montserrat Regular at 12px
  bodySmall: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '12px',
    fontWeight: 400, // Regular
    lineHeight: '1.4',
    letterSpacing: '0.5px',
  },

  // Caption text - Montserrat Regular at 10px
  caption: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '10px',
    fontWeight: 400, // Regular
    lineHeight: '1.3',
    letterSpacing: '0.5px',
  },

  // Bold accent - Montserrat SemiBold at 16px
  bodyLargeBold: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '16px',
    fontWeight: 600, // SemiBold
    lineHeight: '1.6',
    letterSpacing: '0',
  },

  // Buttons - Montserrat SemiBold at 14px
  button: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '14px',
    fontWeight: 600, // SemiBold
    lineHeight: '1.5',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
  },

  // Labels - Montserrat Medium at 12px
  label: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '12px',
    fontWeight: 500, // Medium
    lineHeight: '1.4',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
  },
};

// Tailwind-compatible classes generator
export const getTypographyClass = (variant) => {
  const styles = typography[variant];
  if (!styles) {
    console.warn(`Typography variant "${variant}" not found`);
    return {};
  }
  return styles;
};

// CSS variable names for use in Tailwind config
export const typographyVars = {
  headingLarge: '--typography-heading-large',
  headingMedium: '--typography-heading-medium',
  headingSmall: '--typography-heading-small',
  subheadingLarge: '--typography-subheading-large',
  subheadingMedium: '--typography-subheading-medium',
  bodyLarge: '--typography-body-large',
  bodyMedium: '--typography-body-medium',
  bodySmall: '--typography-body-small',
  caption: '--typography-caption',
  bodyLargeBold: '--typography-body-large-bold',
  button: '--typography-button',
  label: '--typography-label',
};
