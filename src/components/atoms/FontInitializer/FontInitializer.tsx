import { useEffect } from 'react';

export const FontInitializer = () => {
  useEffect(() => {
    const loadFonts = async () => {
      const fontWeights = ['500', '600', '700'];
      const fontPromises = fontWeights.map(async (weight) => {
        const font = new FontFace('Poppins', `url(../../../../public/assets/fonts/Poppins-${weight}.ttf) format('truetype')`, {
          weight,
          style: 'normal'
        });
        try {
          await font.load();

          document.fonts.add(font);
        } catch (error) {
          console.error(`Error loading font ${weight}:`, error);
        }
      });

      await Promise.all(fontPromises);

      document.body.style.fontFamily = 'Poppins, sans-serif';
    };

    loadFonts();
  }, []);

  return null;
};
