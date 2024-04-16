import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import React from 'react';  
import api from '../api/index';


const Home: React.FC = () => {
  const [todos, setTodos] = React.useState([]);


  React.useEffect(() => {
   if (todos.length === 0) {
     api.getTodos().then((data) => {
       setTodos(data);
     });
   }else {
      console.log(todos);
   }
  }, [todos]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>HRIS</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar color="primary">
            <IonTitle size="large">HRIS</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
