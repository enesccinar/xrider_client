import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'

const trackRecordReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_track_records':
            return action.payload
        default:
            return state
    }
}

const fetchTrackRecords = dispatch => async () => {
    const response = await trackerApi('/trackrecords')
    dispatch({ type: 'fetch_track_records', payload: response.data })
}

const createTrackRecord = dispatch => async (name, locations, startTime, endTime) => {
    await trackerApi.post('/trackrecords', { name, locations, startTime, endTime })
}

export const { Provider, Context } = createDataContext(
    trackRecordReducer,
    { fetchTrackRecords, createTrackRecord },
    []
)