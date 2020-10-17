<script>
  import Base from '@/components/Base.svelte';
  import Recents from '@/components/RecentTable.svelte';
  import Address from '@/utils/address';
  import Queue from '@/api/queue.js';
  import { getNotificationsContext } from 'svelte-notifications';
  const { addNotification } = getNotificationsContext();

  const placeholder = `\
Please enter your SICash address to receive test tokens
  `

  let address = '';
  let isLoading = false;

  $: fieldDisabled = !Address.checkAddress(address);

  async function submitAddress() {
    if (!Address.checkAddress(address)) {
      return
    }
    isLoading = true;
    let text = '';
    let type = 'warning';
    let icon = 'fas fa-exclamation-triangle';
    try {
      await Queue.submitAddress(address);
      text = `
      Your SICash testnet tokens request was added to the queue,
      you will receive your tokens shortly. Thank you!`
      type = 'success';
      icon = 'fas fa-check-square';
      address = ''
    } catch (error) {
      const resp = error.response;
      if (!resp) {
        console.log(error)
      } else if (resp.status === 400) {
        if (resp.data === "AddressAlreadyQueued\n") {
          text = 'You can only request tokens once every 24 hours';
          type = 'warning';
        } else {
          text = 'Invalid SICash Testnet Address'
        }
      } else {
        type = 'danger';
        text = 'Something went wrong, please try again later';
      }
    }

    addNotification({
      text, type, icon,
      position: 'top-center',
      removeAfter: 6000,
    });

    isLoading = false;
  }

</script>

<style lang="scss">
  .hero.is-dark {
    background-color: #2e3338;
    border-radius: 0.25rem;
  }
  .hero.is-small .hero-body {
    padding-bottom: 0rem;
    padding-top: 1rem;
    margin-bottom: -2rem;
  }
  .image {
    width: 400px;
    height: 187px;
    margin-left: auto;
    margin-right: auto;
  }

  .hero-body.field-body {
    padding-left: 0;
    padding-right: 0;
  }
</style>

<Base>
<div class="container">
  <div class="hero is-small">
    <div class="hero-body has-text-centered">
      <figure class="image">
        <img src="/sicash-big.png" alt="hero">
      </figure>
    </div>
  </div>
  <div class="hero">
    <div class="hero-body field-body">
      <div class="field has-addons">
        <div class="control is-expanded">
          <input class="input"
          type="text"
          placeholder="{placeholder}"
          bind:value={address} />
        </div>
        <div class="control">
          <button class="button is-info {isLoading ? 'is-loading' : ''}"
            on:click={submitAddress}
            disabled={fieldDisabled}>
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

