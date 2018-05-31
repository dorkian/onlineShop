// Section 1 : Here, we're simply importing our Tutorial model and Action from ngrx/store. 
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Product } from './../models/product.model'

// Section 2 : We're defining the type of action, which is in the form of a string constant.
export const ADD_PRODUCT       = '[PRODUCT] Add'
export const REMOVE_PRODUCT    = '[PRODUCT] Remove'

// Section 3 : We're creating a class for each action with a constructor that allows us to pass in the payload. This isn't a required step, but it does provide you with strong typing.
export class AddProduct implements Action {
    readonly type = ADD_PRODUCT

    constructor(public payload: Product) {}
}

export class RemoveProduct implements Action {
    readonly type = REMOVE_PRODUCT

    constructor(public payload: number) {}
}

// Section 4 : We're exporting all of our action classes for use within our upcoming reducer.
export type Actions = AddProduct | RemoveProduct