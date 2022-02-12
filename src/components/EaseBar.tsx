export default function Component(easeResult: {
    totalWords: number,
    nTotalSentences: number,
}, styles: any){
    return (
        <>
            <p>
                Seu texto está no nível de leitura de <span id="rd_exmlp">{easeExample}.</span>
            </p>
            <div className={styles.ease_bar}>
                <div className={styles.slider} style={{left: `${sliderSize}px`}}></div>
                <div className={styles.cont}>
                    <div className={styles.row} ref={sliderRef}>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                        <div className={styles.col}></div>
                    </div>
                </div>
            </div>
            <ul>
                <li>Muito<br/><span>difícil</span></li>
                <li>Médio</li>
                <li>Muito<br/><span>fácil</span></li>
            </ul>
            <p>
                <br />
                <strong style={{
                    fontSize: "20px"
                }}>Mais sobre seu texto:</strong><br />
                Número de palavras: <strong>{easeResult.totalWords}</strong><br />
                Número de frases: <strong>{easeResult.nTotalSentences}</strong><br />
            </p>
        </>
    )
}