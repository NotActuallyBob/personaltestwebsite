import 'vuetify/styles'
import { ThemeDefinition, createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '@mdi/font/css/materialdesignicons.css'
//import colors from 'vuetify/util/colors'

const myCustomLightTheme: ThemeDefinition = {
    dark: false,
    colors: {
        background: '#F5F5F5',  // Light gray for a soft background
        surface: '#FFFFFF',     // White for a clean surface
        primary: '#3F51B5',     // Indigo for a modern primary color
        'primary-darken-1': '#303F9F', // Darker shade of indigo
        secondary: '#FF4081',   // Pink for a vibrant secondary color
        'secondary-darken-1': '#F50057', // Darker shade of pink
        error: '#F44336',       // Red for errors
        info: '#2196F3',        // Blue for information
        success: '#4CAF50',     // Green for success
        warning: '#FFC107',     // Amber for warnings
    },
}

export default createVuetify({
    theme: {
        defaultTheme: 'myCustomLightTheme',
        themes: {
          myCustomLightTheme,
        },
    },
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
    },
})