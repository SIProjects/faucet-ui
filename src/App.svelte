<script>
  import '@/style/main.scss';
  import '@fortawesome/fontawesome-free/css/all.css';
  import Notifications from 'svelte-notifications';
  import CustomNotification from '@/components/Notification.svelte';
  import Router from 'svelte-spa-router';
  import routes from './routes';
</script>

<Notifications item={CustomNotification}>
  <Router {routes} />
</Notifications>
