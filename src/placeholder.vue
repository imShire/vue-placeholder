<template>
<div class="body bg-fff">
	<div class="">
		<img :src="img" />
	</div>
</div>
</template>
<script>
//https://github.com/hustcc/placeholder.js/blob/master/README-zh.md
import placeholder from 'placeholder.js'
export default {
    components: {
    },
    mixins: [],
    props: {
        size: {
            type: String,
            default: '256x128'
        },
        text: {
            type: String,
            default: 'equal to size'
        },
        fstyle: {
            type: String, // normal / italic / oblique
            default: 'normal',
            validator: function (value) {
                const arr = ['normal', 'italic', 'oblique']
                return arr.indexOf(value) > -1
            }
        },
        fweight: {
            type: [String, Number], // normal / bold / bolder / lighter / Number
            default: 'normal',
            validator: function (value) {
                const arr = ['normal', 'bold', 'bolder', 'lighter']
                if (typeof value === 'number') {
                    return value > 0
                }
                return arr.indexOf(value) > -1
            }
        },
        fsize: {
            type: String,
            default: ''
        },
        ffamily: {
            type: String,
            default: 'consolas'
        },
        color: {
            type: String,
            default: '#FFF'
        },
        bgcolor: {
            type: String,
            default: '#999'
        }
    },
    data () {
        return {
            img: ''
        }
    },
    watch: {
        '$route': 'build'
    },
    created () {
        this.build()
    },
    mounted () {

    },
    computed: {
        opts () {
            return {
                size: this.size,
                bgcolor: this.bgcolor,
                color: this.color,
                text: this.text,
                fstyle: this.fstyle,
                fweight: this.fweight,
                fsize: this.fsize,
                ffamily: this.ffamily
            }
        }
    },
    methods: {
        build () {
            this.img = placeholder.getData(this.opts)
        }
    }
}
</script>
