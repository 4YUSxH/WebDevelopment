// Below class is the essential for making a mangotree object, means it is base properites for being a tree
class TreeEssentials {
    constructor(protected branch: number, protected color: string){

    }
}

// Below class should contain Base class properites for begin a MangoTree
class MangoTree extends TreeEssentials {
    
}



// These are the base propeties before creating any dish
class CookingEssentials {
    constructor(protected gas: string, public gasKaName: string){

    }
}

class Sabji extends CookingEssentials{
    
}

class Cake extends CookingEssentials{
    
}