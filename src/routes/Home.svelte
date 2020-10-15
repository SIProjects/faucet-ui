<script>
  import Base from '@/components/Base.svelte';
  import Recents from '@/components/RecentTable.svelte';

  const placeholder = `\
Please enter your SICash address to receive test tokens
  `

  $: fieldDisabled = true
</script>

<style lang="scss">
  .hero-body {
    padding: 3rem 0rem;
  }
  .hero.is-dark {
    background-color: #2e3338;
    border-radius: 0.25rem;
  }
  .hero-body.is-small {
    padding: 1rem;
  }
</style>

<Base>
<div class="container">
  <div class="hero">
    <div class="hero-body has-text-centered">
      <h1 class="title">
        SICash Faucet
      </h1>
    </div>
  </div>
  <div class="hero">
    <div class="hero-body">
      <div class="field has-addons">
        <div class="control is-expanded">
          <input class="input" type="text" placeholder="{placeholder}" />
        </div>
        <div class="control">
          <button class="button is-info" disabled={fieldDisabled}>
            <span class="icon is-small">
              <i class="fas fa-check"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="hero is-dark">
    <div class="hero-body is-small">
      <h2 class="title is-5">Latest Payouts</h2>
      <Recents />
    </div>
  </div>
</div>
</Base>

