
import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  "colorSchemes": {
    "light": {
      "palette": {
        "primary": {
          "50": "#f8fafc",
          "100": "#F5F6F8",
          "200": "#e2e8f0",
          "300": "#cbd5e1",
          "400": "#94a3b8",
          "500": "#64748b",
          "600": "#475569",
          "700": "#334155",
          "800": "#1e293b",
          "900": "#0f172a"
        },
        "neutral": {
          "500": "#635BFF"
        }
      }
    },
    "dark": {
      "palette": {}
    }
  }
})

export default theme;