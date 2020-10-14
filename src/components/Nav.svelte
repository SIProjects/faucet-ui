<script>
  import {link} from 'svelte-spa-router';
  import {location} from 'svelte-spa-router'

  $: isActive = (route, loc) => {
    return route === loc;
  }
</script>

<style lang="scss">
  .navbar {
    background-image: linear-gradient(#484e55, #3a3f44 60%, #313539);
    color: white;
    font-weight: 600;
  }

  .navbar-item {
    color: white;
  }
  .navbar-item:hover {
    background-color: black;
    color: white;
  }

  a.navbar-item.is-active:not(:focus):not(:hover) {
    color: white;
    background-color: #272b2e;
  }
</style>

<nav class="navbar is-dark">
  <div class="navbar-brand">
    <a class="navbar-item" href="/" use:link>
      <img alt="Branding" src="https://bulma.io/images/bulma-logo.png"
        width="112" height="28">
    </a>
  </div>
  <div class="navbar-menu">
    <div class="navbar-start">
      <a href="/"
        class="navbar-item {isActive('/', $location) ? 'is-active' : ''}"
        use:link>
        Faucet
      </a>
    </div>
  </div>
</nav>

