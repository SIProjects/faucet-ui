<script>

  $: data = [{
    address: "abcde",
    amount: 71,
    is_mined: false,
  }, {
    address: "zyxwvut",
    amount: 80,
    is_mined: true,
  }]
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
      <td>{x.address}</td>
      <td class="has-text-centered">{x.amount.toFixed(8)}</td>
      <td class="has-text-centered">{x.is_mined}</td>
    </tr>
  {/each}
  </tbody>

</table>
