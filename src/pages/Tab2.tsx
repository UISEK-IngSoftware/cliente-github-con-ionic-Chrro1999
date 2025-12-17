import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonInput, IonTextarea } from '@ionic/react';
import { useHistory } from 'react-router';
import { RepositoryItem } from '../interfaces/RepositoryItem';
import './Tab2.css';
import { useState } from 'react'; // Importar useState

const Tab2: React.FC = () => {
  const history = useHistory();
  
  // Usar useState para manejar el estado del formulario
  const [repoFormData, setRepoFormData] = useState<RepositoryItem>({
    name: '',
    description: '',
    imageUrl: '',
    owner: '',
    language: '', 
  });

  
  const setRepoName = (value: string) => {
    setRepoFormData({...repoFormData, name: value});
  };

  const setRepoDescription = (value: string) => {
    setRepoFormData({...repoFormData, description: value});
  };

  
  const createRepository = async (data: RepositoryItem) => {
    console.log('Guardando repositorio:', data);
    return Promise.resolve();
  };

  const saveRepository = () => {
    if (repoFormData.name.trim() === '') {
      alert('El nombre del repositorio es obligatorio');
      return;
    }
    
    createRepository(repoFormData)
      .then(() => {
        history.push('/tab1');
      })
      .catch(error => {
        console.error('Error al guardar:', error);
        alert('Error al guardar el repositorio');
      });
  }; 

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Formulario del Repositorio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div>
          <IonInput 
            label="Nombre del Repositorio" 
            labelPlacement="floating" 
            fill="outline" 
            placeholder="android-proyect"
            value={repoFormData.name}
            onIonChange={(e) => setRepoName(e.detail.value!)}
            className='form-field'
          />

          <IonTextarea 
            label="Descripcion del Repositorio"
            labelPlacement="floating"
            fill="outline" 
            placeholder="Este es un repositorio de Prueba para móvil"
            className='form-field'
            rows={6}
            value={repoFormData.description}
            onIonChange={(e) => setRepoDescription(e.detail.value!)}
          />

          <IonButton 
            expand="block" 
            className='form-field' 
            onClick={saveRepository}
          >
            Guardar Repositorio
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;