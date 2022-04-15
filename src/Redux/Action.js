import {ADDITION , SUBRACTION,RESET,MULTIPLICATION}  from './constant'

export const addition = () =>({
type:ADDITION
})

export const subtraction = () =>({
   type:SUBRACTION 
})

export const reset = () =>({
    type:RESET
 })

export const multiplication = () =>({
    type:MULTIPLICATION
 })