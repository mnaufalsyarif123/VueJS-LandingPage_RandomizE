<template>
    <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="loginModalLabel">Login</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p class="text-muted mb-5">Please Login if You have Account</p>
                    <p class="text-muted mb-5">But This Things are Disabled :P</p>
                    <form>
                        <div class="mb-3">
                            <label for="username" class="form-label">Username</label>
                            <input class="form-control" id="disabledInput" type="text" placeholder="Don't u try!" disabled>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input class="form-control" id="disabledInput" type="text" placeholder="Trust me! XD" disabled>
                        </div>
                        <button type="submit" class="btn btn-primary w-100"  disabled>Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'LoginComponent'
}
</script>
