
// remember to use module.exports instead of tailwind.config in production
tailwind.config = 
   {
      // Note: config only includes the used styles & variables of your selection
      content: ["./src/**/*.{html,vue,svelte,js,ts,jsx,tsx}"],
      theme: {
        extend: {
          fontFamily: {
            'headline-font-family': "DmSans-Medium, sans-serif",
'title-1-font-family': "DmSans-Bold, sans-serif",
'title-2-font-family': "DmSans-Bold, sans-serif",
          },
          fontSize: {
            'headline-font-size': "20px",
'title-1-font-size': "32px",
'title-2-font-size': "24px",
          },
          fontWeight: {
            'headline-font-weight': "500",
'title-1-font-weight': "700",
'title-2-font-weight': "700",
          },
          lineHeight: {
            'headline-line-height': "24px",
'title-1-line-height': "40px",
'title-2-line-height': "32px", 
          },
          letterSpacing: {
             
          },
          borderRadius: {
            'round-3': '16px',  
          },
          colors: {
            
            'background-body-white-100': '#ffffff',
'background-black-5': 'rgba(0, 0, 0, 0.05)',
'text-black-100': '#000000',
'background-white-100': '#ffffff',
'background-black-10': 'rgba(0, 0, 0, 0.10)',
'background-status-accepted': '#119717',
'text-white-100': '#ffffff',
          },
          spacing: {
            'spacing-4': '16px',
'1': '4px',
'spacing-6': '24px',
'spacing-2': '8px',  
          },
          width: {
             
          },
          minWidth: {
             
          },
          maxWidth: {
             
          },
          height: {
             
          },
          minHeight: {
             
          },
          maxHeight: {
             
          }
        }
      }
    }

          