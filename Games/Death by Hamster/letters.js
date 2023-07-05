// Inspired by https://github.com/PaulBGD/PixelFont


const A = [
    [, , 1, 1, 1, 1], 
    [, 1, 1, , , 1, 1],
    [, 1, 1, , , 1, 1],
    [, 1, 1, , , 1, 1],
    [, 1, 1, 1, 1, 1, 1], 
    [, 1, 1, , , 1, 1], 
    [, 1, 1, , , 1, 1], 
];

const B = [
    [, 1, 1, 1, 1, 1],
    [, 1, 1, , , 1, 1],
    [, 1, 1, , , 1, 1],
    [, 1, 1, 1, 1, 1],
    [, 1, 1, , , 1, 1],
    [, 1, 1, , , 1, 1], 
    [, 1, 1, 1, 1, 1], 
    
];

const C = [
    [, , 1, 1, 1, 1], 
    [, 1, 1, , , 1, 1],
    [, 1, 1],
    [, 1, 1],
    [, 1, 1],
    [, 1, 1, , , 1, 1],
    [, , 1, 1, 1, 1]
    
];

const D = [
    [, 1, 1, 1, 1, 1],
    [, 1, 1, , , 1, 1],
    [, 1, 1, , , 1, 1],
    [, 1, 1, , , 1, 1],
    [, 1, 1, , , 1, 1],
    [, 1, 1, , , 1, 1],
    [, 1, 1, 1, 1, 1] 
    
];

const E = [
    
    [, , 1, 1, 1, 1, 1], 
    [, 1, 1, 1, 1, 1, 1],
    [, 1, 1],
    [, 1, 1, 1, 1, 1],
    [, 1, 1],
    [, 1, 1, 1, 1, 1, 1], 
    [, , 1, 1, 1, 1, 1], 
    
];

const F = [
    
    [, , 1, 1, 1, 1, 1], 
    [, 1, 1, 1, 1, 1, 1],
    [, 1, 1],
    [, 1, 1, 1, 1, 1],
    [, 1, 1],
    [, 1, 1],
    [, 1, 1],
    
];

const G = [
    [, , 1, 1, 1, 1, 1], 
    [, 1, 1, 1, 1, 1, 1], , 
    [, 1, 1],
    [, 1, 1, , 1, 1, 1], 
    [, 1, 1, , , 1, 1], 
    [, 1, 1, 1, 1, 1, 1],
    [, , 1, 1, 1, 1]
    
];

const H = [
    [, 1, 1, , , 1, 1],
    [, 1, 1, , , 1, 1],
    [, 1, 1, , , 1, 1],
    [, 1, 1,1,1, 1, 1],
    [, 1, 1, , , 1, 1],
    [, 1, 1, , , 1, 1],
    [, 1, 1, , , 1, 1],
    
];

const I = [
    [, 1, 1, 1, 1, 1, 1],
    [, 1, 1, 1, 1, 1, 1],
    [, , , 1, 1],
    [, , , 1, 1],
    [, , , 1, 1],
    [, 1, 1, 1, 1, 1, 1],
    [, 1, 1, 1, 1, 1, 1],
];

const J = [
    
    [, , 1, 1, 1, 1, 1],  
    [, , , , , 1, 1],
    [, , , , , 1, 1],
    [, , , , , 1, 1],
    [, , , , , 1, 1],
    [, 1, 1, , , 1, 1],
    [, , 1, 1, 1, 1],
    
 ];

 const K = [

    [, 1, 1, , , 1,1],
    [, 1, 1, , , 1,1],
    [, 1, 1, , 1,1],
    [, 1, 1, 1,1],
    [, 1, 1, , 1,1],
    [, 1, 1, , , 1,1], 
    [, 1, 1, , , 1,1],
    
 ];

 const L = [

    [, 1, 1],
    [, 1, 1],
    [, 1, 1],
    [, 1, 1],
    [, 1, 1],
    [, 1, 1, 1, 1, 1, 1], 
    [, 1, 1, 1, 1, 1, 1], 
    
 ];

 const M = [

    [, 1, 1, , , , 1], 
    [, 1, 1, 1, , 1, 1],
    [, 1, 1, , 1, , 1],
    [, 1, 1, , , , 1],
    [, 1, 1, , , , 1],
    [, 1, 1, , , , 1], 
    [, 1, 1, , , , 1],

 ];

 const N = [

    [, 1, 1, , , 1, 1], 
    [, 1, 1, , , 1, 1], 
    [, 1, 1, 1, , 1, 1], 
    [, 1, 1, 1, 1, 1, 1], 
    [, 1, 1, , 1, 1, 1], 
    [, 1, 1, , , 1, 1], 
    [, 1, 1, , , 1, 1],
    
 ];

 const O = [

    [, , 1, 1, 1, 1],
    [, 1, 1, , , 1, 1],
    [, 1, 1, , , 1, 1], 
    [, 1, 1, , , 1, 1], 
    [, 1, 1, , , 1, 1], 
    [, 1, 1, , , 1, 1], 
    [, , 1, 1, 1, 1], 
    
 ];

 const P = [
    [, 1, 1, 1, 1, 1],
    [, 1, 1, , , 1, 1],
    [, 1, 1, , , 1, 1],
    [, 1, 1, 1, 1, 1],
    [, 1, 1],
    [, 1, 1],
    [, 1, 1],
    
 ];

 const Q = [

    [, , 1, 1, 1, 1],
    [, 1, 1, , , 1, 1],
    [, 1, 1, , , 1, 1],
    [, 1, 1, , , 1, 1],
    [, 1, 1, , 1, 1, 1],
    [, 1, 1, , , 1, 1], 
    [, , 1, 1, 1, 1, , 1], 
    
 ];

 const R = [

    [, 1, 1, 1, 1, 1],
    [, 1, 1, , , 1, 1],
    [, 1, 1, , , 1, 1],
    [, 1, 1, 1, 1, 1],
    [, 1, 1, , , 1, 1],
    [, 1, 1, , , 1, 1],
    [, 1, 1, , , 1, 1],
    
 ];

 const S = [

    [, , 1, 1, 1, 1], 
    [, 1, 1, , , 1, 1], 
    [, 1, 1],
    [, , 1, 1, 1, 1], 
    [, , , , , 1, 1], 
    [, 1, 1, , , 1, 1], 
    [, , 1, 1, 1, 1],
    
 ];

 const T = [

    [, 1, 1, 1, 1, 1, 1], 
    [, 1, 1, 1, 1, 1, 1],
    [, , , 1, 1],
    [, , , 1, 1], 
    [, , , 1, 1],
    [, , , 1, 1],
    [, , , 1, 1],
    
 ];

 const U = [

    [, 1, 1, , , 1, 1], 
    [, 1, 1, , , 1, 1], 
    [, 1, 1, , , 1, 1], 
    [, 1, 1, , , 1, 1], 
    [, 1, 1, , , 1, 1], 
    [, 1, 1, 1, 1, 1, 1], 
    [, , 1, 1, 1, 1],
    
 ];

 const V = [

    [, 1, 1, , , , 1], 
    [, 1, 1, , , , 1], 
    [, 1, 1, , , , 1],  
    [, 1, 1, , , , 1],  
    [, 1, 1, , , , 1],  
    [, , 1, 1, , 1],  
    [, , , 1, 1],
    
 ];

 const W = [

    [, 1, 1, , , , 1],  
    [, 1, 1, , , , 1],  
    [, 1, 1, , , , 1],  
    [, 1, 1, , 1, , 1],  
    [, 1, 1, , 1, , 1],  
    [, 1, 1, , 1, , 1],
    [, , , 1, , 1], 
    
 ];

 const X = [

    [, 1, , , , , 1], 
    [, 1, 1, , , 1, 1],  
    [, , 1, 1, 1, 1],  
    [, , , 1, 1],  
    [, , 1, 1, 1, 1],  
    [, 1, 1, , , 1, 1],  
    [, 1, , , , , 1],  
    
 ];

 const Y = [

    [, 1, 1, , , 1, 1],  
    [, 1, 1, , , 1, 1],  
    [, 1, 1, , , 1, 1],  
    [, , 1, 1, 1, 1, 1],  
    [, , , , , 1, 1],  
    [, 1, 1, , , 1, 1],  
    [, , 1, 1, 1, 1], 
    
 ];

 const Z = [

    [,1, 1, 1, 1, 1, 1],
    [, , , , , 1, 1],
    [, , , , 1, 1],
    [, , , 1, 1],
    [, , 1, 1],
    [, 1, 1],
    [, 1, 1, 1, 1, 1, 1], , 
    
 ];

 const one = [
   [, , , 1, 1],
   [, , 1, 1, 1],
   [, , , 1, 1],
   [, , , 1, 1],
   [, , , 1, 1],
   [, , , 1, 1],
   [, 1, 1, 1, 1, 1, 1],
];


const two = [
   [, , 1, 1, 1, 1],
   [, 1, 1, , , 1, 1],
   [, , , , , 1, 1],
   [, , , , 1, 1],
   [, , , 1, 1],
   [, , 1, 1],
   [, 1, 1, 1, 1, 1, 1],
];

const thr = [
   [, , 1, 1, 1, 1],
   [, 1, 1, , , 1, 1],
   [, , , , , 1, 1],
   [, , , , 1, 1],
   [, , , , , 1, 1],
   [, 1, 1, , , 1, 1],
   [, , 1, 1, 1, 1],
];


const fou = [
   [, , , , 1, 1, 1],
   [, , , 1, 1, 1, 1],
   [, , 1, 1, , 1, 1],
   [, 1, 1, , , 1, 1],
   [, 1, 1, 1, 1, 1, 1],
   [, , , , , 1, 1],
   [, , , , , 1, 1],
];

const fiv = [
   [, 1, 1, 1, 1, 1, 1],
   [, 1, 1],
   [, 1, 1],
   [, 1, 1, 1, 1, 1,],
   [, , , , , 1, 1],
   [, , , , , 1, 1],
   [, 1, 1, 1, 1, 1,],
];

const six = [
      [, , 1, 1, 1, 1],
      [, 1, 1, , , 1, 1],
      [, 1, 1],
      [, 1, 1, 1, 1, 1],
      [, 1, 1, , , 1, 1],
      [, 1, 1, , , 1, 1],
      [, , 1, 1, 1, 1],
];

const sev = [
   [, 1, 1, 1, 1, 1, 1],
   [, 1, 1, 1, 1, 1, 1],
   [, , , , 1, 1],
   [, , , , 1, 1],
   [, , , 1, 1],
   [, , , 1, 1],
   [, , , 1, 1],
];

const eig = [
   [, , 1, 1, 1, 1],
   [, 1, 1, , , 1, 1],
   [, 1, 1, , , 1, 1],
   [, , 1, 1, 1, 1],
   [, 1, 1, , , 1, 1],
   [, 1, 1, , , 1, 1],
   [, , 1, 1, 1, 1],
];

const nin = [
   [, , 1, 1, 1, 1],
   [, 1, 1, , , 1, 1],
   [, 1, 1, , , 1, 1],
   [, , 1, 1, 1, 1, 1],
   [, , , , , 1, 1],
   [, , , , , 1, 1],
   [, , , , , 1, 1],
];


const zer = [
   [, , 1, 1, 1, 1],
   [, 1, 1, , , 1, 1],
   [, 1, 1, , , 1, 1],
   [, 1, 1, , 1, 1, 1],
   [, 1, 1, 1, , 1, 1],
   [, 1, 1, , , 1, 1],
   [, , 1, 1, 1, 1],
];

const Slash = [
   [],
   [, , , , , , 1],
   [, , , , , 1],
   [, , , , 1],
   [, , , 1],
   [, , 1],
   [, 1],
];

const Colon = [
   [, 1,1],
   [, 1,1],
   [],
   [],
   [],
   [, 1,1],
   [, 1,1],
];

const Dot = [
   [],
   [],
   [],
   [],

   [],
   [, 1,1],
   [, 1,1],
]

const Neg = [
   [],
   [],
   [],
   [, 1, 1, 1, 1, 1, 1],
   [],
   [],
   [],
];

const Exclaim = [
    [, , 1, 1],
    [, , 1, 1],
    [, , 1, 1],
    [, 1, 1, 1],
    [, 1, 1],
    [],
    [, 1, 1],
];



const fI = {
   'A': A, 'B': B, 'C': C, 'D': D, 'E': E, 'F': F,
   'G': G, 'H': H, 'I': I, 'J': J, 'K': K, 'L': L,
   'M': M, 'N': N, 'O': O, 'P': P, 'Q': Q, 'R': R,
   'S': S, 'T': T, 'U': U, 'V': V, 'W': W, 'X': X,
   'Y': Y, 'Z': Z, '1': one, '2': two, '3': thr, '4': fou,
   '5': fiv, '6': six, '7': sev, '8': eig, '9': nin, '0': zer,
   '/': Slash, ':': Colon, '.': Dot, '-': Neg, '!': Exclaim
}

