import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg } from '@ionic/react';
import './Tab3.css';


const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil del usuario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Perfil del usuario</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardHeader>
            <IonImg alt="Silhouette of mountains" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRC-KflR5lYPFVaQgXfTTETXCg82fRoXCqJEN5a8X2xTqLVy-tPbReqiJFuN-bIa9ewPhug-BCp8nV4qWjWPPGh5JwoG9ouhhG-ygWTYZ3mg&s=10" />
            <IonCardTitle>Christian Bolaños</IonCardTitle>
            <IonCardSubtitle>Chrro1999</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>Soy un desarrollador de software apasionado a las tegnologias</IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;