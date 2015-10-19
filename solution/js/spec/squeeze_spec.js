function one_o(str) {
   str = str.replace(/o{2}/gi, "o");
   return str;
}
one_o("boozoo");

function muliple_e_to_one_e(str) {
   str = str.replace(/e+/gi, "e");
   return str;
}
muliple_e_to_one_e("meeeeeeeeeleeeeeeeee");

  it("does not change a word with duplicates that are not consecutive", function(){
      expect(squeeze("banana")).toBe("banana")
  });

  it("works for multiple words", function(){
      expect(squeeze("yabba dabba doo")).toBe("yaba daba do")
  });

  it("works with capital letters", function(){
      expect(squeeze("AW-WEE-OO KILLER TOFU")).toBe("AW-WE-O KILER TOFU")
  });
});
