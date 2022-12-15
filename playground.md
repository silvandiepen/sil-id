---
projectStyle: /assets/custom.css
---

## Playground

---

<script type="module">

    import { createApp } from 'https://unpkg.com/petite-vue?module'  
    import prettier from "https://unpkg.com/prettier@2.8.1/esm/standalone.mjs";
    import parserBabel from "https://unpkg.com/prettier@2.8.1/esm/parser-babel.mjs";
    import { useId } from  'https://unpkg.com/@sil/id@0.0.6/dist/mjs/index.js?module'

    createApp({

        format: 'XXXX-XXXX-XXXX-XXXX',
        total: null,
        alphabet: null,
        alphabetOptions: [null, 'a-z', 'A-Z', 'a-Z','0-9', 'a-z0-9', 'a-Z0-9', 'a-Z0-9','custom'],
        hasCustomAlphabet: false,
        customAlphabet: "ABC",

        get myId() {
            const id = useId({
                format: this.format,
                total: this.total,
                alphabet: this.currentAlphabet
            });
            return id();
        },
        get currentAlphabet(){
            const alph=  this.hasCustomAlphabet ? this.customAlphabet : this.alphabet;
            return alph || "X";
        },
        get code(){

            const args = [
                this.currentAlphabet ? `alphabet: "${this.currentAlphabet}"` : null,
                this.format && this.format !== "XXXX-XXXX-XXXX-XXXX" ? `format: "${this.format}"` : null,
                this.total ? `total: ${this.total}` : null,
            ].filter((v)=>v !== null)

            return prettier.format(`        
import { useId } from "@sil/id";
const id = useId(${args.length ? `{${args.join(",")}}` : ``});`,{
      parser: "babel",
      plugins: [parserBabel],
    })
        },
        get warning(){
            if(this.total && this.format){
                return `When you set the total, the format will be ignored`
            } else return ``;
        },
        setCustom(){
            console.log('changing alphabet', this.alphabet);
            this.alphabet === "custom" ? this.hasCustomAlphabet = true : this.hasCustomAlphabet = false;
        }

    }).mount()

</script>

<!-- v-scope value can be omitted -->
<div v-scope>
    <p class="example">{{ myId }}</p>
    <hr>
    <pre><code>{{code}}</code></pre>
    <hr/>
    <br/>
    <div class="input">
        <label>Total</label>
        <input type="number" v-model="total" />
    </div>
    <div class="input">
        <label>Alphabet</label>
        <select v-model="alphabet" v-on:change="setCustom" :class="[hasCustomAlphabet && 'translucent']">
            <option v-for="option,idx in alphabetOptions" :value="option" :key="idx" :value="option">{{ option ? option : 'default: a-Z0-9' }}</option>
        </select>
    </div>
    <div class="input" v-if="hasCustomAlphabet">
        <label>Custom Alphabet</label>
        <input v-model="customAlphabet" />
    </div>
    <div class="input">
        <label>Format</label>
        <input type="text" v-model="format" />
        <div class="Warning">{{warning}}</div>
    </div>
</div>
