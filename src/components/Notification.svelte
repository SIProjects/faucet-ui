<script>
  import { fade } from 'svelte/transition';
  export let notification;
  export let onRemove = null;
</script>

<style lang="scss">
  .notification {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    margin: 12px;
    width: 600px;
    font-size: 1rem;
    border-radius: 6px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
    &.warning {
      background-color: #f89406;
      border-color: #e96506;
      color: #fff;
    }
    &.success {
      background-color: #62c462;
      border-color: #62bd4f;
      color: #fff;
    }
    &.danger {
      background-color: #b74242;
      border-color: #c94242;
      color: #fff;
    }
  }

  .notification-content {
    width: 540px;
    padding: 12px 6px 12px 12px;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    align-items: center;
  }
  .notification-content p {
    color: #fff;
    margin-left: 1rem;
    word-wrap: break-word;
  }
  .notification-buttons {
    border-left: 1px solid #eee;
  }
  .notification a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 100%;
    padding: 0 0 2px;
    font-size: 1rem;
    margin: 0;
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    color: inherit;
    box-sizing: border-box;
    text-decoration: none !important;
  }
</style>

<div class="notification {notification.type}" in:fade out:fade>
  <div class="notification-content">
    <div>
      <span class="icon">
        <i class="{notification.icon}"></i>
      </span>
    </div>
    <p>
      <slot>{notification.text}</slot>
    </p>
  </div>
  <div class="notification-buttons">
    <a on:click={onRemove}>
      <span class="icon">
        <i class="fas fa-times"></i>
      </span>
    </a>
  </div>
</div>
