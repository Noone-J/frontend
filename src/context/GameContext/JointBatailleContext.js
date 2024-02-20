import { useContext } from 'react';
import AuthContext from '../../context/AuthContext'; // Ajustez le chemin d'importation  ici

export const useJoinBatailleParty  = () => {
  const { authTokens } = useContext(AuthContext);

  const joinBatailleParty = async (gameId) => {
    console.log(authTokens)
    const response = await fetch(`/battle/api/join_partie/${gameId}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${authTokens}`
      },
    });
    if (response.ok) {
        // Gérer le cas de succès
        const data = await response.json();
        console.log(data)
        // Utiliser les données reçues
      } else {
        // Gérer le cas d'erreur
        console.error('Erreur lors de la tentative de rejoindre la partie:', response.statusText);
      }
  };

  return joinBatailleParty;
};
