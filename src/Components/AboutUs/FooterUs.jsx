function FooterUs() {
    return (
        <div className="w-full">
            <p className="pl-6 font-alata text-violeta-ciba text-2xl">Horarios</p>
            <div className="flex">
                <div className="pr-4">
                    <p className="pl-6 font-roboto text-xl">0 a 6 años:</p>
                    <ul className="pl-6 font-roboto text-xl pb-4">
                        <li>Mañanas: 9 a 13h</li>
                        <li>Tardes: 16 a 19h</li>
                    </ul>
                </div>
                <div>
                    <p className="pl-6 font-roboto text-xl">7 a 13 años:</p>
                    <ul className="pl-6 font-roboto text-xl">
                        <li>Tardes: 17 a 20h</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
export default FooterUs;