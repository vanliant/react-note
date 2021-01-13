import {UPDATE_INPUT} from '../constant'

//初始化人的列表
const initState = ''
export default function inputReducer(preState=initState,action){
    const {type,data} = action
    // console.log('action',action)
	switch (type) {
        case UPDATE_INPUT: 
			return data
		default:
			return preState
	}
}
