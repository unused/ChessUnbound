
class ChessFieldHelper
  class << self
    def code_to_index(code)
      ('a'..'h').to_a.index(code[0]) + ((8 - code[1].to_i) * 8)
    end
  end
end
