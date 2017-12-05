import { Planet, Vehicle, ResultRequest } from '../models';

export async function GetPlanets(): Promise<Planet[]> {
   let response = await fetch('https://findfalcone.herokuapp.com/planets');
   let data = await response.json();
   return data;
}

export async function GetVehicles(): Promise<Vehicle[]> {
    let response = await fetch('https://findfalcone.herokuapp.com/vehicles');
    let data = await response.json();
    return data;
 }

export async function Result(req: ResultRequest): Promise<{}> {
    let response  = await fetch('https://findfalcone.herokuapp.com/find', 
                                { 
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json'
                                    },
                                    method : 'POST',
                                    body: JSON.stringify(req)});
    let data = await response.json();
    return data;
}

export async function Token(): Promise<string> {
    let response  = await fetch('https://findfalcone.herokuapp.com/token', 
                                { 
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json'
                                    },
                                    method : 'POST'});
    let data = await response.json();
    return data.token;
 }
 