import createDataContext from './createDataContext'

const locationReducer = (state, action) => {
    switch (action.type) {
        case 'add_current_location':
            return { ...state, currentLocation: action.payload }
        case 'start_recording':
            return { ...state, recording: true, startTime: new Date().getTime() }
        case 'stop_recording':
            return { ...state, recording: false, stopTime: new Date().getTime() }
        case 'add_location':
            let lastDistance
            if (state.locations && state.locations.length > 0) {
                const currentCoords = action.payload.coords
                const lastCoords = state.locations[state.locations.length - 1].coords

                if (currentCoords.longitude !== lastCoords.longitude
                    || currentCoords.latitude !== lastCoords.latitude) {
                    lastDistance = state.distance ? state.distance : 0 + haversine([
                        currentCoords.latitude,
                        currentCoords.longitude
                    ], [
                        lastCoords.latitude,
                        lastCoords.longitude
                    ])
                }
            }
            console.log(lastDistance)
            return {
                ...state,
                locations: [...state.locations, action.payload],
                distance: lastDistance
            }
        case 'change_name':
            return { ...state, name: action.payload }
        case 'reset':
            return { ...state, name: '', locations: [] }
        default:
            return state
    }
}

const changeName = dispatch => (name) => {
    dispatch({ type: 'change_name', payload: name })
}

const startRecording = dispatch => () => {
    dispatch({ type: 'start_recording' })
}

const stopRecording = dispatch => () => {
    dispatch({ type: 'stop_recording' })
}

const addLocation = dispatch => (location, recording) => {
    dispatch({ type: 'add_current_location', payload: location })

    if (recording) {
        dispatch({ type: 'add_location', payload: location })
    }
}

const reset = dispatch => () => {
    dispatch({ type: 'reset' })
}

const haversine = ([lat1, lon1], [lat2, lon2]) => {
    const [pi, asin, sin, cos, sqrt, pow, round] = [
        'PI', 'asin', 'sin', 'cos', 'sqrt', 'pow', 'round'
    ]
        .map(k => Math[k]),

        // degrees as radians
        [rlat1, rlat2, rlon1, rlon2] = [lat1, lat2, lon1, lon2]
            .map(x => x / 180 * pi),

        dLat = rlat2 - rlat1,
        dLon = rlon2 - rlon1,
        radius = 6372.8; // km

    const d =
        radius * 2 * asin(
            sqrt(
                pow(sin(dLat / 2), 2) +
                pow(sin(dLon / 2), 2) *
                cos(rlat1) * cos(rlat2)
            )
        )

    return d
}

export const { Context, Provider } = createDataContext(
    locationReducer,
    { startRecording, stopRecording, addLocation, changeName, reset },
    { name: '', startTime: '', stopTime: '', recording: false, locations: [], currentLocation: null, distance: 0 }
)