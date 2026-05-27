# Typography Theme System Guide

Centralized font styling system for consistent typography across the AIQSEC website.

## Overview

- **Headings**: Montserrat Bold (700) at 58px, 36px, 28px
- **Subheadings**: Montserrat Regular (400) at 24px, 18px
- **Body Text**: Montserrat Regular (400) at 16px, 14px, 12px
- **Buttons**: Montserrat SemiBold (600) at 14px
- **Labels**: Montserrat Medium (500) at 12px

## Usage

### Option 1: Using CSS Classes (Easiest)

Import the typography CSS in your component:

```jsx
import '../theme/typography.css';

export function MyComponent() {
  return (
    <h1 className="heading-large">My Large Heading</h1>
    <p className="body-large">Body text here</p>
  );
}
```

**Available Classes:**
- `.heading-large` (58px, Bold)
- `.heading-medium` (36px, Bold)
- `.heading-small` (28px, Bold)
- `.subheading-large` (24px, Regular)
- `.subheading-medium` (18px, Regular)
- `.body-large` (16px, Regular)
- `.body-medium` (14px, Regular)
- `.body-small` (12px, Regular)
- `.caption` (10px, Regular)
- `.button` (14px, SemiBold, uppercase)
- `.label` (12px, Medium, uppercase)

### Option 2: Using JavaScript Objects (For Inline Styles)

```jsx
import { typography } from '../theme/typography';

export function MyComponent() {
  return (
    <h1 style={typography.headingLarge}>My Heading</h1>
    <p style={typography.bodyLarge}>Body text</p>
  );
}
```

### Option 3: Using CSS Variables

In your CSS file:

```css
h1 {
  font-family: var(--typography-heading-large-font);
  font-size: 58px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
}
```

## Font Sizes by Use Case

| Component | Size | Weight | Example |
|-----------|------|--------|---------|
| Page Headings | 58px | Bold | "Ready to Join Us?" |
| Section Headers | 36px | Bold | "Why Attend AIQSEC?" |
| Subsection Headers | 28px | Bold | Mission statement titles |
| Subheadings | 24px | Regular | Card titles |
| Section Intro | 18px | Regular | Descriptive text blocks |
| Body Text | 16px | Regular | Paragraph content |
| Small Text | 14px | Regular | List items, descriptions |
| Captions | 12px | Regular | Meta information |
| Buttons | 14px | SemiBold | CTA buttons |
| Labels | 12px | Medium | Form labels, badges |

## Modifying the Theme

To change font sizes globally:

1. Edit `src/theme/typography.js` for JavaScript usage
2. Edit `src/theme/typography.css` for CSS class/variable usage
3. Both files maintain the same structure for consistency

Example: To change body-large from 16px to 18px:

```js
// In typography.js
bodyLarge: {
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '18px',  // Changed from 16px
  fontWeight: 400,
  lineHeight: '1.6',
  letterSpacing: '0',
}
```

## Font Weight Reference

- **700**: Bold (Headings)
- **400**: Regular (Body text, subheadings)
- **500**: Medium (Labels)
- **600**: SemiBold (Buttons, emphasis)
- **900**: Black (Tailwind utility classes)

## Integration with Existing Styles

The theme system works alongside Tailwind CSS. Use theme classes for typography, Tailwind for spacing and layout:

```jsx
<div className="py-8 px-4">
  <h1 className="heading-large mb-4">Welcome</h1>
  <p className="body-large text-slate-600">Description here</p>
</div>
```

## Migration Checklist

To apply this theme to existing pages:

- [ ] Import `typography.css` in page or root
- [ ] Replace inline `fontFamily` styles with theme classes or `typography` object
- [ ] Update all heading elements to use theme variants
- [ ] Update body text to use `.body-large` or `.body-medium`
- [ ] Test on all pages for consistency

## Support

To update typography rules globally in the future:
1. Modify `src/theme/typography.js` and `src/theme/typography.css`
2. Changes automatically propagate to all components using the theme
