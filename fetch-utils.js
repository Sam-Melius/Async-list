const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUwODgwMywiZXhwIjoxOTU1MDg0ODAzfQ.J-wd3ZinAsWJOx74WAlDTfP_zlOPEuXkq5omF4WTAQk';

const SUPABASE_URL = 'https://wkltsapfnvvazzlbkpbz.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getAllDrums() {
    const response = await client
        .from('drums')
        .select();
    
    console.log(response.data);
    return response.data;
}

// export async function getDrum(id) {
//     const response = await client
//         .from('drums')
//         .select()
//         .match({ id: id })
//         .single();

//     return response.data;
// }

export async function getAllGames() {
    const response = await client
        .from('games')
        .select();
    
    console.log(response.data);
    return response.data;
}

export async function getAllPets() {
    const response = await client
        .from('pets')
        .select();
    
    console.log(response.data);
    return response.data;
}

export async function getAllStates() {
    const response = await client
        .from('states')
        .select();
    
    console.log(response.data);
    return response.data;
}