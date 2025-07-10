import { reactive, watch } from 'vue'
import type { Game } from './types'

interface State {
    games: Game[]
    selectedGameId: string | null
    selectedSceneId: string | null
    selectedScriptId: string | null
}

const defaultState: State = {
    games: [],
    selectedGameId: null,
    selectedSceneId: null,
    selectedScriptId: null
}

const state = reactive<State>(load())

function load(): State {
    const raw = localStorage.getItem('scenario-data')
    if (raw) {
        try {
            const parsed = JSON.parse(raw) as State
            return { ...defaultState, ...parsed }
        } catch (e) {
            console.error('failed to parse state', e)
        }
    }
    return { ...defaultState }
}

watch(
    () => state,
    (val) => {
        localStorage.setItem('scenario-data', JSON.stringify(val))
    },
    { deep: true }
)

export { state, defaultState }