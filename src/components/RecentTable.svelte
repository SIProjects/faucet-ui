<script>
  import Payouts from '@/api/payouts.js';
  import { onMount } from 'svelte';

  let data = []

  async function loadData() {
    data = await Payouts.recent();
  }

  onMount(async () => {
    await loadData()
  })
</script>

<table class="table is-fullwidth is-striped">
  <thead>
    <tr>
      <th>Address</th>
      <th class="has-text-centered">Amount</th>
      <th class="has-text-centered">Status</th>
    </tr>
  </thead>

  <tbody>
  {#each data as x}
    <tr>
      <td>
        <a href="http://testnet.sicash.network/address/{x.address}" class="address">
          {x.address}
        </a>
      </td>
      <td class="has-text-centered amount">{x.amount.toFixed(8)}</td>
      <td class="has-text-centered">
        {#if x.is_mined}
          <span class="icon">
            <i class="fas fa-check"></i>
          </span>
        {/if}
    </td>
    </tr>
  {:else}
    <p>Loading...</p>
  {/each}
  </tbody>

</table>
