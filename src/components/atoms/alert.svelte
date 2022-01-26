<script>
	import { hidden, alertText } from '../../stores/alertStore';
</script>

<div class="alert {$hidden ? 'fade-out' : ''}">{$alertText}</div>

<style>
	.alert {
		position: fixed;
		top: 10%;
		left: 0;
		transform: translate(calc(50vw - 50%));
		z-index: 2;
		padding: 1em;
		background-color: #dddddd;
		box-shadow: -1px 14px 27px -7px rgba(92, 91, 91, 1);
		border-radius: 10px;
		transition: all 0.5s;
	}
	.fade-out {
		opacity: 0;
	}
</style>
