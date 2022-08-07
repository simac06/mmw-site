import React from 'react'
import styles from '../styles/FeaturedMusic.module.scss'
import Image from 'next/image'
import Link from 'next/link'

function FeaturedMusic() {

    let placeholderSize = 125;
    let popupPlaceholderSize = 1000;


    return (
        <section className={styles.section}>
            <h1 className={styles.heading}>FEATURED MUSIC</h1>

            <div className={styles.album_grid}>
                <div className={styles.album}>







                    <Image src='/images/placeholder_200.jpg'
                        width={placeholderSize}
                        height={placeholderSize}
                    ></Image>

                    <div className={styles.album_info}>
                        <h2 className={styles.album_title}>SONG</h2>
                        <p className={styles.album_artist}>ARTIST</p>
                    </div>
                </div>
                <div className={styles.album}>

                    <Image src='/images/placeholder_200.jpg'
                        width={placeholderSize}
                        height={placeholderSize}
                    ></Image>

                    <div className={styles.album_info}>
                        <h2 className={styles.album_title}>SONG</h2>
                        <p className={styles.album_artist}>ARTIST</p>
                    </div>
                </div>
                <div className={styles.album}>

                    <Image src='/images/placeholder_200.jpg'
                        width={placeholderSize}
                        height={placeholderSize}
                    ></Image>

                    <div className={styles.album_info}>
                        <h2 className={styles.album_title}>SONG</h2>
                        <p className={styles.album_artist}>ARTIST</p>
                    </div>
                </div>
                <div className={styles.album}>

                    <Image src='/images/placeholder_200.jpg'
                        width={placeholderSize}
                        height={placeholderSize}
                    ></Image>

                    <div className={styles.album_info}>
                        <h2 className={styles.album_title}>SONG</h2>
                        <p className={styles.album_artist}>ARTIST</p>
                    </div>
                </div>
                <div className={styles.album}>

                    <Image src='/images/placeholder_200.jpg'
                        width={placeholderSize}
                        height={placeholderSize}
                    ></Image>

                    <div className={styles.album_info}>
                        <h2 className={styles.album_title}>SONG</h2>
                        <p className={styles.album_artist}>ARTIST</p>
                    </div>
                </div>
                <div className={styles.album}>

                    <Image src='/images/placeholder_200.jpg'
                        width={placeholderSize}
                        height={placeholderSize}
                    ></Image>

                    <div className={styles.album_info}>
                        <h2 className={styles.album_title}>SONG</h2>
                        <p className={styles.album_artist}>ARTIST</p>
                    </div>
                </div>
            </div>

            <Link href="/about.js"><a><button className={styles.button}>SEE MORE</button></a></Link>


        </section>
    )
}

export default FeaturedMusic