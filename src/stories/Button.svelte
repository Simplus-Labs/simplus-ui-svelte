<script lang="ts">
	export let primary = false;
	export let size: 'small' | 'medium' | 'large' = 'medium';
	export let label = '';

	const BASE_BUTTON_CLASS =
		'cursor-pointer rounded-md leading-none inline-block font-spaceGrotesk px-0.5 py-0.5';

	$: primaryButton = primary
		? 'text-white bg-green hover:bg-green-500'
		: 'text-black bg-gradient-to-b from-[#FEB751] via-orange to-red-500';
	$: primaryLabel = primary
		? 'text-white bg-green hover:bg-green-500'
		: 'bg-white text-black hover:bg-transparent hover:text-white';

	$: sizeClass = size === 'small' ? 'px-3 py-2' : size === 'large' ? 'px-5 py-2' : 'px-4 py-2';
</script>

<button type="button" class="{BASE_BUTTON_CLASS} {primaryButton}" on:click>
	<span class="{sizeClass} {primaryLabel} flex w-full rounded">
		{label}
	</span>
</button>
