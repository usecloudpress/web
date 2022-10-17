These icons are generated from https://tabler-icons.io/. The process is as follows:

1. Find the appropriate icon on https://tabler-icons.io/
2. Click on the icon and the click "See more icon variants"
3. Select the JSX Code tab and click the source code to copy it to the clipboard
4. Create new a new component for the icon in this directory with the name `[icon name]Icon` and the following structure:

   ```
    import * as React from 'react';
    
    const IconNameIcon = (props: React.ComponentProps<'svg'>) => {
      return (
      );
    };
    export default IconNameIcon;
    ```
5. Paste the JSX Code you copied for the icon as the component return value and make the following fixes:
   * Remove the `className`, `width`, and `height` attributes
   * Fix any attributes that do not follow React naming conventions. For example, `strokeWidth` is copied as `stroke-width`
   * Add the `{...props}` spread to the end of the existing attribute
6. Add the icon to the exports of the `index.tsx` file
