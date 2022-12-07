## Playground

---

<script type="module">

    import { createApp } from 'https://unpkg.com/petite-vue?module'
    // import { useId } from  'https://unpkg.com/@sil/id@0.0.3/dist/index.js'

    createApp({

        format: 'XXXX-XXXX-XXXX-XXXX',
        total: null,
        alphabet: null,
        alphabetOptions: [null,'a-z', 'A-Z', 'a-Z','0-9', 'a-z0-9', 'a-Z0-9', 'a-Z0-9'],

        get myId() {
            return "";
            // const myId = useId();
            // return id();
        }

    }).mount()

</script>

<!-- v-scope value can be omitted -->
<div v-scope>
    <p>{{ format }}</p>
    <p>{{ total }}</p>
    <p>{{ alphabet }}</p>
    <p>{{ myId }}</p>
    <hr/>
    <br/>
    <label>Alphabet</label>
    <select v-model="alphabet">
        <option v-for="option,idx in alphabetOptions" :value="option" :key="idx">{{ option }}</option>
    </select>
    <label>Format</label>
    <br/>
    <input type="text" v-model="format" />
</div>
