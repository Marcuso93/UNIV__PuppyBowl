// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2204-FTB-MT-WEB-PT';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${'2204-FTB-MT-WEB-PT'}/`;


export const fetchAllPlayers = async () => {
    try {
        const response = await fetch(`${APIURL}/players`);
        const result = await response.json();
        if (result.error) throw result.error;
        return result.data.players;
      } catch (err) {
        console.error('Uh oh, trouble fetching players!', err);
      }

};

export const fetchSinglePlayer = async (playerId) => {
  try {
    const response = await fetch(`${APIURL}/players/${playerId}`);
    const result = await response.json();
    if (result.error) throw result.error;
    console.log(result.data.player);
    return result.data.player;
}   catch (err) {
    console.error(err);
}


};

export const addNewPlayer = async (playerObj) => {
  try {
    const response = await fetch(
      `${APIURL}/players/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(playerObj),
      }
    );
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.error(err);
  }


};

export const removePlayer = async (playerId) => {
  try {
    const response = await fetch(`${APIURL}/players/${playerId}`,
      {
        method: 'DELETE',
      });
    const result = await response.json();
    if (result.err) throw result.error;
    return;
    //console.log(result);
  } catch (err) {
    console.error(err);
  }

};
