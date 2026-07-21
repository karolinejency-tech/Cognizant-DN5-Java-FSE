import React from "react";

// Odd Players
export function OddPlayers(props) {

    const [first, , third, , fifth] = props.players;

    return (
        <div>
            <li>First : {first}</li>
            <li>Third : {third}</li>
            <li>Fifth : {fifth}</li>
        </div>
    );
}

// Even Players
export function EvenPlayers(props) {

    const [, second, , fourth, , sixth] = props.players;

    return (
        <div>
            <li>Second : {second}</li>
            <li>Fourth : {fourth}</li>
            <li>Sixth : {sixth}</li>
        </div>
    );
}

// Arrays
const T20Players = [
    "Mr. First Player",
    "Mr. Second Player",
    "Mr. Third Player"
];

const RanjiTrophyPlayers = [
    "Mr. Fourth Player",
    "Mr. Fifth Player",
    "Mr. Sixth Player"
];

// Merge arrays
export const IndianPlayers = [
    ...T20Players,
    ...RanjiTrophyPlayers
];

// Display merged players
export function ListofIndianPlayers(props) {
    return (
        <div>
            {
                props.IndianPlayers.map((player, index) => (
                    <li key={index}>{player}</li>
                ))
            }
        </div>
    );
}