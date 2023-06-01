import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';
import { scheduleNotification } from './NotificationService';

const GEOFENCING_TASK = 'GEOFENCING_TASK';

TaskManager.defineTask(GEOFENCING_TASK, ({ data, error }: any) => {
  if (error) {
    // check `error.message` for more details.
    return;
  }

  // specify the type of data
  const { eventType, region } = data;
  
  if (eventType === Location.GeofencingEventType.Enter) {
    scheduleNotification(`Welcome! You've entered ${region.identifier}!`);
  }
});

const getAndMonitorLocation = async () => {
  // ask for permission
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    console.error('Permission to access location was denied');
    return;
  }

  // setup geofencing for specific businesses
  let businesses = [
    { id: 'Business1', latitude: 37.4219983, longitude: -122.084, radius: 100 },
    // add more businesses here
  ];

  for (let business of businesses) {
    await Location.startGeofencingAsync(GEOFENCING_TASK, [
      {
        identifier: business.id,
        latitude: business.latitude,
        longitude: business.longitude,
        radius: business.radius,
        notifyOnEnter: true,
      },
    ]);
  }
};

const stopGeofencing = async () => {
  await Location.stopGeofencingAsync(GEOFENCING_TASK);
};

export {
  getAndMonitorLocation,
  stopGeofencing,
};
