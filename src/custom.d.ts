// BSD 3-Clause License
//
// Copyright (c) 2022, Iiro Polso
// All rights reserved.


// Declaring modules to be able to use mp4 files in App.tsx
declare module '*.mp4' {
    const src: string;
    export default src;
}