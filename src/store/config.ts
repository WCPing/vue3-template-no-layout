import { defineStore } from 'pinia'
import { settings } from '@/settings.ts'

export const useConfigStore = defineStore('config', {
    state: () => ({
        language: settings.defaultLanguage,
    }),
    persist: {
        storage: localStorage,
        paths: ['language'],
    },
    actions: {
        setLanguage(lang: string) {
            this.language = lang
            // document.title = '' // i18 page title
        },
    },
})
