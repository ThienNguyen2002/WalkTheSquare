import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

async function requestNotificationPermission() {
  const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  if (status !== 'granted') {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if (status !== 'granted') {
      return false;
    }
  }
  return true;
}

async function scheduleNotification(body: string, data = {}) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got a new deal!",
      body: body,
      data: data,
    },
    trigger: null,
  });
}

async function cancelAllScheduledNotifications() {
  await Notifications.cancelAllScheduledNotificationsAsync();
}

export {
  requestNotificationPermission,
  scheduleNotification,
  cancelAllScheduledNotifications,
};
