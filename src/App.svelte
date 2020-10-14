<script>
  import '@/style/main.scss';
  import '@fortawesome/fontawesome-free/css/all.css';
  import Router from 'svelte-spa-router';
  import routes from './routes';
</script>

<Router {routes} />
